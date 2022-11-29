import React, { createContext, useCallback, useContext } from "react";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isOpenSidebar, setOpenSidebar] = React.useState(false);
  const [isOpenGenre, setOpenGenre] = React.useState(false);
  const [isOpenModal, setOpenModal] = React.useState(false);

  const openSidebar = useCallback(() => {
    return setOpenSidebar(true);
  }, []);
  const closeSidebar = useCallback(() => {
    return setOpenSidebar(false);
  }, []);
  const openGenre = useCallback(() => {
    return setOpenGenre(true);
  }, []);
  const closeGenre = useCallback(() => {
    return setOpenGenre(false);
  }, []);
  const openModal = useCallback(() => {
    return setOpenModal(true);
  }, []);
  const closeModal = useCallback(() => {
    return setOpenModal(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isOpenSidebar,
        openSidebar,
        closeSidebar,
        openGenre,
        closeGenre,
        isOpenGenre,
        openModal,
        closeModal,
        isOpenModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const UserAuth = () => {
  return useContext(AuthContext);
};
