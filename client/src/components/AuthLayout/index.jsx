import useAuth from "../../hooks/useAuth"
import { Outlet, Navigate } from "react-router-dom"
import Storage from "../../services/storage"
import routes from "../../routes"

function AuthLayout() {
  const { auth } = useAuth()
  if (!auth.user) {
    Storage.clearAccessToken()
  }

  return (
    auth.user
      ? <Outlet />
      : <Navigate to={routes.LOGIN} replace />
  )
}

export default AuthLayout