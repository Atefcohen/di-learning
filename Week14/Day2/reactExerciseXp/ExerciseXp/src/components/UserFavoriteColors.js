const UserFavoriteColors = (props) => {

    const animal = props.animals;

        return(
            <div>
                {  
                animal.map((fav_an, i) => {
                    return (
                            <li key ={i}> {fav_an}</li> 
                    );             
                })
                }
            </div>
        );
}
export default UserFavoriteColors