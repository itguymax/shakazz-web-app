import { useRouter } from 'next/router'
import Link from "next/link";
// reactstrap components
import {NavLink} from "reactstrap";
function NavigationLink({ label, href }) {
  const router = useRouter()
  const style = {
    
    color: router.asPath.startsWith(href)  ? '#CC9933' : router.pathname==="/blog" | router.pathname==="/blog/[slug]" ? "#244230": null,
  }

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href)
  }

  return (
   <Link href={href} >
     <NavLink href={href} onClick={handleClick}  style={style} className="nav-link-icon">
        <span 
        style={{font: 'normal normal bold 14px/16px Ubuntu'}} 
        className="nav-link-inner--text">
        {label.toLocaleUpperCase()}
        </span>
      </NavLink>
    </Link>
  )
}

export default NavigationLink;