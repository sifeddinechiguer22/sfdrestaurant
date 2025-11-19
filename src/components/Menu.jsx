import React from 'react';
import './Menu.css';

function Menu() {
  const menuItems = [
    {
      category: "Entrées",
      items: [
        { name: "Salade Marocaine", description: "Salade fraîche aux légumes de saison et fines herbes", price: "45 DH" },
        { name: "Briouates", description: "Feuilles de brick farcies à la viande et aux amandes", price: "35 DH" },
        { name: "Harira", description: "Soupe traditionnelle marocaine aux lentilles et pois chiches", price: "25 DH" }
      ]
    },
    {
      category: "Plats Principaux",
      items: [
        { name: "Tajine de Poulet", description: "Tajine au poulet, citron confit et olives", price: "85 DH" },
        { name: "Couscous Royal", description: "Couscous avec légumes et viandes mijotées", price: "95 DH" },
        { name: "Pastilla au Poulet", description: "Feuille de brick farcie au poulet et amandes", price: "75 DH" }
      ]
    },
    {
      category: "Desserts & Boissons",
      items: [
        { name: "Briouates au Miel", description: "Pâtisserie feuilletée au miel et amandes", price: "30 DH" },
        { name: "Corne de Gazelle", description: "Pâtisserie traditionnelle aux amandes", price: "25 DH" },
        { name: "Thé à la Menthe", description: "Thé vert à la menthe fraîche et sucre", price: "15 DH" }
      ]
    }
  ];

  return (
    <section className="menu-section">
      <div className="container">
        <div className="menu-header">
          <h2>Notre Menu Gastronomique</h2>
          <p className="menu-subtitle">Découvrez les saveurs authentiques du Maroc</p>
        </div>
        <div className="menu-categories">
          {menuItems.map((category, index) => (
            <div key={index} className="menu-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="menu-items">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="menu-item">
                    <div className="item-info">
                      <h4 className="item-name">{item.name}</h4>
                      <p className="item-description">{item.description}</p>
                    </div>
                    <span className="item-price">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;