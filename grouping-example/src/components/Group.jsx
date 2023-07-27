// src/components/Group.js
import React, { useState } from 'react';

const Group = ({ groupModel }) => {
    const [group, setGroup] = useState(groupModel);
  
    const handleAddGroup = () => {
      const newGroup = {
        id: group.nestedGroups.length + 1,
        name: `Group ${group.nestedGroups.length + 1}`,
        nestedGroups: [],
      };
      group.nestedGroups.push(newGroup);
      setGroup({...group});
    };
  
    const handleNameChange = (event) => {
        group.name = event.target.value;
        setGroup({...group});
    };
  
    return (
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
        <input type="text" value={group.name} onChange={handleNameChange} />
        <button onClick={handleAddGroup}>Add Nested Group</button>
        {group.nestedGroups.map((nestedGroup) => (
          <Group key={nestedGroup.id} groupModel={nestedGroup} />
        ))}
      </div>
    );
  };

// const Group = ({ groupModel }) => {
//     const [nestedGroups, setNestedGroups] = useState(groupModel.nestedGroups);
//     const [name, setName] = useState(groupModel.name);
  
//     const handleAddGroup = () => {
//       const newGroup = {
//         id: nestedGroups.length + 1,
//         name: `Group ${nestedGroups.length + 1}`,
//         nestedGroups: [],
//       };
//       setNestedGroups([...nestedGroups, newGroup]);
//       //groupModel.nestedGroups.push(newGroup);
//     };
  
//     const handleNameChange = (event) => {
//       setName(event.target.value);
//       //groupModel.name = event.target.value;
//     };
  
//     return (
//       <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
//         <input type="text" value={name} onChange={handleNameChange} />
//         <button onClick={handleAddGroup}>Add Nested Group</button>
//         {nestedGroups.map((nestedGroup) => (
//           <Group key={nestedGroup.id} groupModel={nestedGroup} />
//         ))}
//       </div>
//     );
//   };

export default Group;