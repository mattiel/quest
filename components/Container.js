const Container = ({ children, props }) => {
  return (
    <div className="lg:container mx-auto">
      {children}
    </div>
  )
}

export default Container; 