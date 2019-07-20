import React from 'react'
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Button, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'

class Navbar extends React.Component {
  
  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <>
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
          
        </Menu.Menu>
        
        </>
      )
    }
  }
  
  render() {
    return (
      <>
        <br />
        <div>
          <div style={{float: "left"}}><img  width="100px" height="35px" src="https://resources-live.sketch.cloud/files/0c691bf6-95ea-4f35-ad3e-46e842eefe7b.png?Expires=1563757200&Signature=JZOLUzbbpRRf75jc9AVKNkdgULSUJTUXonJwc11yPZ2NOCYPKfCGxMJP5iBOTiNMr-z2aTOroxhU8Q44cxiG65nXwui7CDUvjika~Jq-m~FDsdLzlRVIU9f7n4Cbu9-sxXiZykhFvoFJdBA0TPvtHMQyoik9Zr2UjkmkPFDF2FU_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" />
          </div>
        <div style={{float: "right", padding:"0 25px 0 0"}}>{ this.rightNavItems() }
        </div>
        <div style={{float: "right", padding:"0 25px 0 0"}}><Button>
          Upload Video
        </Button> 
        </div>
          <div style={{float: "right", padding:"0 25px 0 25px"}} ><img src="https://resources-live.sketch.cloud/files/6f304d0b-fd53-4d76-8fa4-3bbd49f2b696.png?Expires=1563757200&Signature=gPfapizcx1LgAZoOEI-1KCbXFjcGsUIPOAL-y94RZP33lO7VRC-maIRfp6xiQWO41jZe3BpZ2vH9Qov6x9W~evf29ff6FoIN9efAiYfwkJFF0naXpN4vqU0YouPATpC9CKrbpDRwhAWVz6Zd16GWr2eakDkHJgbAHvTJFNSLVfY_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA" width="40px" height="35px"/>
        </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        
      </>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
