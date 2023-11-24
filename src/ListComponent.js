import React from 'react';

function ListComponent() {
  const games = [
    '1998 – Unreal',
    '1999 – Unreal Tournament',
    '2002 – Unreal Tournament 2003',
    '2002 – Unreal Championship',
    '2003 – Unreal II: The Awakening',
    '2004 – Unreal Tournament 2004',
    '2005 – Unreal Championship 2: The Liandri Conflict',
    '2006 – Gears of War',
    '2007 – Unreal Tournament 3',
    '2009 – Shadow Complex',
    '2010 – Infinity Blade',
    '2011 – Infinity Blade II',
    '2011 – Gears of War 3',
    '2011 – Bulletstorm',
    '2013 – Gears of War: Judgment',
    '2017 – Fortnite',
  ];

  return (
    <div>
      <ul>
        {games.map((game, index) => (
          <li key={index}>{game}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListComponent;
