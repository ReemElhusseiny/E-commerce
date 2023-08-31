import React from 'react'
import { useState } from 'react';
import { Navbar, Container, Nav } from "react-bootstrap";
import '../Css/mynav.css'; 
export  function MyNav() {
    const [isHovered, setIsHovered] = useState(false);
    // let [show, setShow] = useState(false);
    let handleMouseOver = ()=>{
      
            setIsHovered(true)
    }
    let handleMouseOut =()=>{
            setIsHovered(false)
               
    }
  return (
    <div>
        <div>
        <Navbar className='nav'  data-bs-theme="dark">
        <Container>
          <Navbar.Brand onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} href="#home">THEME DEMO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#home">SHOP</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#features">PRODUCT</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#pricing">BLOG</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#pricing">PAGES</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#pricing">NEW IN</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#pricing">TREND</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav1' href="#pricing">COLLECTIONS</Nav.Link>
            <Nav.Link onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} className='nav2' href="#pricing">30% OFF</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
<div  onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut}>
            {isHovered && <div  className='box1' >
               
<p><b>Collection List Pages</b> </p>                      
<p>Collection List 01</p>
<p>Collection List 02</p>
<p>Collection List 03</p>
<p>Collection List 04</p>
<p>Collection List 05</p>
<p>Collection Detail 01</p>
<p>Collection Detail 02</p>
<p>Collection Detail 03 (Coming Soon)</p>

                
            </div> }

{isHovered && <div  className='box2'  >
                       
<p><b>Collection Pages </b></p>
<p>Layout 01 - Left Sidebar</p>
<p>Layout 02 - No Sidebar</p>
<p>Layout 03 - Right Sidebar</p>
<p>Layout 04 - Masonry</p>
<p>Layout 05 - With Banners</p>
<p>Layout 06 - Express Order</p>
</div> }
{isHovered && <div className='box3' >
                       

    <p><b>Main Features</b></p>

<p>Dynamic Filtering </p>
<p>Tags Filtering</p>
<p>Horizontal Filter</p>
<p>Vertical Filter</p>
<p>Product Compare</p>
<p>Ajax Infinite Scroll</p>
<p>Pagination</p>
<p>No Sidebar</p>


</div> }
{isHovered && <div className='box4'>
<p><b>Main Features</b></p> 

<p>Left Sidebar</p> 
<p>Right Sidebar</p> 
<p>Sub Collections</p> 
<p>List View</p> 
<p>Grid View</p> 
<p>Grid 2 Columns</p> 
<p>Grid 3 Columns</p> 
<p>Grid 4 Columns</p> 
<p>Grid 5 Columns</p> 

</div> }
        </div>
    </div>
  )
}


