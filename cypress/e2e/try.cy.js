
function add(a,b){
  return a+b
}

function sub(a,b){
  return a-b
}

describe("Testing", ()=>{
  it("Addition of 2 numbers", ()=>{
    expect(add(4,3)).to.eq(7)
  })

  it("Subtraction of 2 numbers", ()=>{
    expect(sub(4,3)).to.eq(1)
  })
})