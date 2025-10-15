import { Spin } from "antd";

export default function PageLoading() {
    return <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '200px',
        flexDirection: 'column',
        gap: '16px'
    }}>
        <Spin size="large" />
        <span style={{ color: '#666' }}>Loading page...</span>
    </div>
}