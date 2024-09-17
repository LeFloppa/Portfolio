import React from 'react';

const skills = [
    { name: 'JavaScript', icon: require('../assets/icons/js.png') },
    { name: 'React', icon: require('../assets/icons/react.png') },
    { name: 'Node.js', icon: require('../assets/icons/nodejs.png') },
    { name: 'MongoDB', icon: require('../assets/icons/mongo-db.png') },
    { name: 'Java', icon: require('../assets/icons/java.png') },
    { name: 'Python', icon: require('../assets/icons/python.png') },
    { name: 'C++', icon: require('../assets/icons/c-plus-plus.png') },
    { name: 'Git', icon: require('../assets/icons/git.png') },
    { name: 'PhotoShop', icon: require('../assets/icons/photoshop.png') },
  ];

  const SkillItem = () => {
    return (
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    );
  };

export default SkillItem;