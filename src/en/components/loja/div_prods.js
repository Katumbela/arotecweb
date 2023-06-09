import mascote from '../../imgs/r2.png'
import produtos from '../../pages/lista_prods'; 
import'../../css/div_loja.css'
import Card from './card';

const DivLoja = ({handleClick, cart}) => {

    return (
  <div className='destaque_loja container text-center'>
   
    <div className="t">
    <div className="mascote text-center">
            <img src={mascote} alt="" />
    </div>
    
 <p className='text-secondary f-12'>Devices and electronics available for project development and support. From electronic components to assembled devices.</p>
   <hr />
   </div>


        <div className="row text-center mx-auto">
          {
            produtos.map((item) => (
                <Card handleClick={handleClick} key={item.id} item={item}/>
                )
            )
          }
        </div>

  </div>
)
    }

export default DivLoja;