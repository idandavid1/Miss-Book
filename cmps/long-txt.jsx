const { useState } = React

export function LongTxt({txt, length = 100}) {
    const [isRenderAll, setIsRenderAll] = useState(false)

    function renderTxt() {
        if(length >= txt.length || isRenderAll) return txt
        else return txt.slice(0, length)
    }

    return <div>
        <div>{renderTxt()}</div>
        <div className="toggle-txt" onClick={() => setIsRenderAll(prevIsRenderAll => !prevIsRenderAll)}>{isRenderAll ? 'less' : 'more'}</div>
    </div>
}