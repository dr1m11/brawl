import ContentLoader from "react-content-loader"

const CaseSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={156}
        height={156}
        viewBox="0 0 200 400"
        backgroundColor="#4630b3"
        foregroundColor="#2f2175"
        {...props}
    >
        <rect x="9" y="11" rx="3" ry="3" width="156" height="156"/>
    </ContentLoader>
)

export default CaseSkeleton