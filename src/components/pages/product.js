
import React,{useState} from 'react'
import { Dropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';








export const Product = ({datas}) => {



    const [items,setItems]=useState(datas);

 const filterItem = (categItem) => {
        const upDatedItems = datas.filter((curItem)=>{
            return curItem.category===categItem;
        });
        setItems(upDatedItems);
    }
  

    
    



    return (
      <Container fluid>
    

 
           <Dropdown>
  <Dropdown.Toggle variant="info" id="dropdown-basic">
    Filter by Category
  </Dropdown.Toggle>

  <Dropdown.Menu>
   <Dropdown.Item onClick={()=> setItems(datas) }>All</Dropdown.Item>
    <Dropdown.Item onClick={()=> filterItem('electronics') }>Electronics</Dropdown.Item>
    <Dropdown.Item onClick={()=> filterItem('jewelery') }>Jewelery</Dropdown.Item>
   <Dropdown.Item onClick={()=> filterItem("women's clothing") }>Women's clothing</Dropdown.Item>
   <Dropdown.Item onClick={()=> filterItem("men's clothing") }>Men's Clothing</Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
                
                   
                {

                    items.map((curElem) => {
                        
                            const {price,category,image,title } = curElem;
                        return (
                           
                             <section  className="container-fluid mt-5" >
                             <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                <div className="mb-5">
                        <div className="card h-100 ">
                        {/* <!-- Product image--> */}
                             <img className="card-img-top" src={image} alt="..." />
                         {/* <!-- Product details--> */}
                         <div className="card-body p-4">
                                 <div className="text-center">
                                    {/* <!-- Product name--> */}
                                    <h5 className="fw-bolder">{title}</h5>
                                  {/* <!-- Product price--> */}
                                 <p >Rs.{price}</p>  
                        </div>
                            </div>
                            {/* <!-- Product actions--> */}
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                <div className="text-center"><p>{category}</p></div>
                            </div>
                   </div>
                    </div>
        </div>
        </div>
        </section>
                        )
                })        

                }
                    
            </Container>
           
    )
}
