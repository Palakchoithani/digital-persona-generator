import React from 'react'


export default function Avatar({ seed = 'guest' }) {
const url = `https://api.dicebear.com/8.x/identicon/svg?seed=${encodeURIComponent(seed)}`
return (
<div>
<img src={url} alt={`avatar-${seed}`} style={{ width: 96, height: 96 }} />
<div style={{ marginTop: 8 }}>{seed}</div>
</div>
)
}