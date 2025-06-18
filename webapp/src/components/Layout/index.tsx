import { Link, Outlet } from 'react-router-dom'
import { getAllIdeasRoute, getNewIdeaRoute } from './../../lib/routes'
import css from './index.module.scss'

export const Layout = () => {
  return (
    <div className={css.layout}>
      <div className={css.navigation}>
        <p className={css.logo}>IdeaNick</p>
        <ul className={css.menu}>
          <li className={css.item}>
            <Link className={css.link} to={getAllIdeasRoute()}>
              All Ideas
            </Link>
          </li>
          <li className={css.item}>
            <Link className={css.link} to={getNewIdeaRoute()}>
              Create New Idea
            </Link>
          </li>
        </ul>
      </div>
      <hr />
      <div className={css.content}>
        <Outlet />
      </div>
    </div>
  )
}
