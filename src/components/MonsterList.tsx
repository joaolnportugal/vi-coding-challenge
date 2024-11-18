import React, { useState, useEffect } from "react";
import { getMonsters, getMonsterDetails } from "../services/api";
import MonsterCard from "./MonsterCard/MonsterCard";
import MonsterFilter from "./MonsterFilter/MonsterFilter";
import { MonsterListProps } from "./Types/Types";

const MonsterList: React.FC<MonsterListProps> = ({
  isHeadingVisible = true,
}) => {
  const [monsters, setMonsters] = useState<any[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<any[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsterList = await getMonsters();
      const monsterDetails = await Promise.all(
        monsterList.map((monster: any) => getMonsterDetails(monster.url))
      );
      setMonsters(monsterDetails);
      setFilteredMonsters(monsterDetails);
      setLoading(false);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    if (typeFilter.length > 0) {
      setFilteredMonsters(
        monsters.filter((monster) =>
          monster.types.some((t: any) => typeFilter.includes(t.type.name))
        )
      );
    } else {
      setFilteredMonsters(monsters);
    }
  }, [typeFilter, monsters]);

  const monsterTypes = Array.from(
    new Set(
      monsters.flatMap((monster) => monster.types.map((t: any) => t.type.name))
    )
  );

  return (
    <div className="list-wrapper">
      {loading ? (
        <div className="monster-list">
          {filteredMonsters.map((monster) => (
            <MonsterCard
              key={monster.id}
              id={monster.id}
              name={monster.name}
              image={monster.sprites.front_default}
              type={monster.types.map((t: any) => t.type.name)}
            />
          ))}
        </div>
      ) : (
        <div>
          {isHeadingVisible && (
            <h1 style={{ color: "black", textAlign: "start" }}>
              These are our products
            </h1>
          )}
          {/* <h1 style={{ color: "black", textAlign: "start" }}>
            These are our products
          </h1> */}
          <div className="monster-list">
            <MonsterFilter
              types={monsterTypes}
              selectedTypes={typeFilter}
              onChange={setTypeFilter}
            />
            <div className="monster-list">
              {filteredMonsters.map((monster) => (
                <MonsterCard
                  key={monster.id}
                  id={monster.id}
                  name={monster.name}
                  image={monster.sprites.front_default}
                  type={monster.types.map((t: any) => t.type.name)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MonsterList;
