import { navLinks } from "../contents" 
import usePageScrollDown from "../hooks/usePageScrollDown"
import { styles } from "../styles"

const MobileNav = ({menuOpen,setMenuOpen,active,setActive}) => {
    // *** required states ***
  const pageScrollDown = usePageScrollDown()

  return (
    <nav className={`${styles.transition} ${menuOpen?'translate-y-0 opacity-100':'-translate-y-[2000px] opacity-0'} transform z-19 fixed ${!pageScrollDown? 'top-[85px]':'top-[70px]'} left-0 bg-nav-pattern bg-cover bg-no-repeat bg-center w-[100%] h-[100%] pt-[60px] before:content-[''] before:absolute before:inset-0 before:bg-[rgba(219,207,247,0.05)] before:backdrop-blur-[.5px]`}>

        <ul className=' max-w-sm mx-auto flex flex-col gap-12 list-none'>

        {navLinks.map((link) => (
          <li
            key={link.id}
            className={` z-30 ${
              active === link.title ? "text-secondary":"text-white"
            } hover:text-secondary font-semibold text-[15px] tracking-wider text-center uppercase cursor-pointer`}
            onClick={() => {
              setActive(link.title) // set active
              setMenuOpen(!menuOpen) // toggle menu-open
            }}
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}

        </ul>

    </nav>
  )
}

export default MobileNav