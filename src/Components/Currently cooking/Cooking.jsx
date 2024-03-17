import PropTypes from 'prop-types'

const Cooking = ({cooking}) => {
    const {id, name, time, caloric} = cooking;
    // // const {name} = Cooking; 
    // console.log(Cooking)
    
    return (
        <div>
          <h1>Hello World.....</h1>
          <h3>{name}</h3>
          <div>
          
          </div>
          
        </div>
    );
};
Cooking.propTypes = {
    Cooking: PropTypes.object
}
export default Cooking;