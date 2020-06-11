import React from 'react';
import Card from './Card';



	//Estaba diferente pero lo cambie porque
	//se supone que esto se parece mas a 
	//JavaScript, antes estaba como una 
	//constante que recorria el arreglo
	//de robots, ahora es como un return
	//con todo lo que tenia esa constante
const CardList = ({ Robots }) => {
	return(
		<div>
			{
				Robots.map((user, i) => {
					return (
						<Card 
							key={i} 
							id={Robots[i].id} 
							name={Robots[i].name} 
							email={Robots[i].email}
							/>
					);
				})
			}
		</div>
	);
}

export default CardList;