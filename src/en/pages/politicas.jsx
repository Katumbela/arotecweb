import '../App.css';
// Bootstrap CSS
// Bootstrap Bundle JS
import Header from '../components/header';
import Footer from '../components/footer';
import Banners from '../components/banners';
import BannerPreto from '../components/banner_preto';

const Politicas = ({emaill, nomee, cart}) => {
    document.title='Políticas de Privacidade & Termos de uso | AROTEC';
  return (
    <div className="w-100">
      
      < Header  nomee={nomee} emaill={emaill} cart={cart} />
<BannerPreto>
Privacy Policy
</BannerPreto>
    <div className="container">
      <br />
      <div class="container">
        
      <h2>Privacy Policy</h2><br />

<p>
The website <a href="http://www.arotec.ao">www.arotec.ao</a> is owned by the company AROTEC SU, which is the controller of your personal data.
</p>
<p>
We have adopted this Privacy Policy, which determines how we are processing the information collected by the website www.arotec.ao and also explains why we need to collect personal data about you. Therefore, you must read this Privacy Policy before using the website www.arotec.ao.
</p>

<p>
We take care of your personal data and assume responsibility for ensuring the confidentiality and security of your personal information.
</p>

<p>

These are the personal information we collect:
When you visit the www.arotec.ao website, we automatically collect certain information about your device, including information about your browser, IP address, time zone and some of the cookies installed on your device. In addition, when you browse the Site, we collect information about the individual pages or products you view, which websites or search terms redirected you to our Site, and how you interact with the Site. We refer to this automatically collected information as "Device Information". In addition, we may collect personal data that you provide (including, but not limited to: First Name, Last Name, Address, payment information, etc.) during the registration process in order to fulfill the Agreement.
</p>
<b>Why do we process your data?</b><br /><br />

<p>
Our highest priority is the security of users' personal data and therefore we can process only minimal data, only as long as absolutely necessary for the maintenance of the site. Information collected automatically is used to identify possible cases of abuse and establish statistical data on the use of the website. This statistical data is not aggregated in other ways that allow the identification of specific users of the system.
<br />
<br />
You can visit the site without telling us who you are or revealing any information that could be used by someone else to uniquely identify you. If, despite this, you want to use any of the features of the site, or want to receive our newsletter, or want to provide other details by filling in and sending forms, you can provide personal data to us, such as your email, first name, last name, city of residence, organization and telephone number. You can choose not to provide us with personal data, but as a result, you may not be able to use some of the features on the site. For example, you will not be able to receive our Newsletter or contact us directly through our website. Users who are unsure which personal information is required are invited to contact us at arotec.info@gmail.com.

</p><b>Your rights:</b><br />

<p>If you live in Europe, these are the rights guaranteed regarding your personal data:
</p>


<ul>
  <li>The right to be informed.</li>
  <li>The right to access.</li>
  <li>The right to rectification.</li>
  <li>The right to delete.</li>
  <li>The right to restrict processing.</li>
  <li>The right to data portability.</li>
  <li>The right to object.</li>
</ul>







<p>

Rights regarding automatic decision-making and profiling.
If you would like to exercise these rights, please contact us using the contact details below.

</p>

<p>

Additionally, if you reside in Europe, we state that we are processing your information for the purpose of fulfilling contracts we may have entered into with you (for example, if you make a purchase on our Site), or to pursue our company's legitimate interests. listed above. Also, please be aware that your information may be transferred outside of Europe, including Canada and the United States of America.

</p>

<p>
  <p>
  <b>Links to other sites:</b><br />
Our website may contain links to other websites that are not controlled by us and/or are not owned by us. Please be aware that we are not responsible for the privacy policies of such third party websites and organizations. We encourage you to be aware when you leave our website, and we also encourage you to read the privacy policy of each of the websites that may collect your personal information.

  </p>
</p>

<p>

<b>Information security:</b><br />
We guarantee that the information you provide is on servers and computers stored in secure and controlled environments, protected from unauthorized access, use and disclosure. We maintain reasonable administrative, technical and physical security measures in order to protect the personal data in our custody from unauthorized access, use, modification and disclosure. Despite this, no data transmission over the Internet or wireless systems can be guaranteed.

</p>

<p>
<b>Legal statement:</b><br />
We will disclose any information we collect, use or receive if such disclosure is required or permitted by law, in order to comply with subpoenas or similar legal proceedings, and also when we believe in good faith that disclosure is necessary to protect our rights, for the protection of the safety of others, for fraud investigations or to respond to a government request.

</p>
<p>

<b>Contact information:</b><br />
If you would like to contact us to learn more about this Privacy Policy, or would like to access any information regarding your individual rights and your Personal Information, you may send an email to arotec.info@gmail.com.
    
</p>

  </div>
    </div>
      < Footer />
      
    </div>
  );
}

export default Politicas;
