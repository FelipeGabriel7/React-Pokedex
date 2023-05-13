import "./PokeForm.css";

export const PokeForm = ({ handleClick, handleUser }) => {
  return (
    <>
      <div className="search-pokemon">
        <div className="search-pokemon-title">
          <h2> Buscar Pokemon </h2>
        </div>

        <form className="search-pokemon-form">
          <label>
            <input
              type="search"
              className="input-pokemon"
              name="poke"
              placeholder="busque seu pokemon"
              onChange={handleUser}
            />
          </label>

          <button className="btn-search" onClick={(e) => handleClick(e)}>
            Buscar
          </button>
        </form>
      </div>
    </>
  );
};

// export class PokeForm extends React.Component {

//   render() {
//     const { handleClick, handleUser } = this.props;

//     return (

//         <div className="search-pokemon">

//               <div className="search-pokemon-title">
//                 <h2> Buscar Pokemon </h2>
//               </div>

//               <form className="search-pokemon-form">
//           <label>
//             <input
//               type="search"
//               className="input-pokemon"
//               name="poke"
//               placeholder="busque seu pokemon"
//               onChange={handleUser}
//             />
//           </label>

//           <button className="btn-search" onClick={(e) => handleClick(e)}>
//               Buscar
//             </button>
//         </form>

//         </div>

//     );
//   }
// }
