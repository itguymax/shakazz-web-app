const LineItem = ({textLeft, textRight, colorLeft, colorRight}) => {
    const cl = colorLeft || '#444'
    const cr = colorRight || '#679966'
    return (
   <div className=" d-flex " style={{justifyContent: 'space-between'}}>
        <h6 className="text-left" style={{font: 'normal normal bold 14px/15px Ubuntu', color: cl}}>{textLeft}</h6>
        <h6 className="text-right" style={{font: 'normal normal bold 14px/15px Ubuntu', color: cr}}>{textRight}</h6>
    </div>
)
}


export default LineItem;