//get
const libraryData = async (req, res) => {
  try{
    res.status(200).json({
      message: "get lib data success"
    })
  } catch (err) {
    console.log(err)
  }
}

export default libraryData