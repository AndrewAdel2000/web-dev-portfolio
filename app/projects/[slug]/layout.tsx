import Header from "../../components/Header"
import Background from "../../components/Background"
import CursorFollower from "../../components/CursorFollower"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Background />
      <Header />
      <CursorFollower />
      {children}
    </>
  )
}

