import React ,{Component} from 'react';
import '../component_css/footer.css';

class Footer extends Component {

  render(){

    return (
        <footer class="footer-distributed">
 
                <div class="footer-left">
                
                <h3>Subsidiary Management <span>Using Blockchain</span></h3>
                
                
                <p class="footer-company-name">BitGeek29 <br></br> Mini-Project | SEM 6 | &copy; 2022</p>
                </div>
                
                <div class="footer-center">
                
                <div>
                <i class="fa fa-map-marker"></i>
                <p><span>Vasai West</span> Maharashtra, India</p>
                </div>
                
                <div>
                <i class="fa fa-phone"></i>
                <p>+91 7796114345</p>
                </div>
                
                <div>
                <i class="fa fa-envelope"></i>
                <p>shaikhhaseeb301@gmail.com</p>
                </div>
                
                </div>
                
                <div class="footer-right">
                
                <p class="footer-company-about">
                <span><b>About the project</b></span>
               Subsidiary Management System using Blockchain for easy and Safe Allocation of Commodities !
                </p>

                
                </div>
 
        </footer>
    );

  }
  
}

export default Footer;
