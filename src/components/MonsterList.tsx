import React, { useState, useEffect } from "react";
import { getMonsters, getMonsterDetails } from "../services/api";
import MonsterCard from "./MonsterCard/MonsterCard";
import MonsterFilter from "./MonsterFilter/MonsterFilter";

const MonsterList: React.FC = () => {
  const [monsters, setMonsters] = useState<any[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<any[]>([]);
  const [typeFilter, setTypeFilter] = useState<string>("");

  useEffect(() => {
    const fetchMonsters = async () => {
      const monsterList = await getMonsters();
      const monsterDetails = await Promise.all(
        monsterList.map((monster: any) => getMonsterDetails(monster.url))
      );
      setMonsters(monsterDetails);
      setFilteredMonsters(monsterDetails);
    };

    fetchMonsters();
  }, []);

  useEffect(() => {
    if (typeFilter) {
      setFilteredMonsters(
        monsters.filter((monster) =>
          monster.types.some((t: any) => t.type.name === typeFilter)
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
    <div>
      <MonsterFilter
        types={monsterTypes}
        selectedType={typeFilter}
        onChange={setTypeFilter}
      />
      <div className="monster-list">
        {filteredMonsters.map((monster) => (
          <MonsterCard
            id={monster.id}
            name={monster.name}
            image={monster.sprites.front_default}
            type={monster.types.map((t: any) => t.type.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default MonsterList;
