import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7.03965 4.07572L20 16L16.0114 22L7.23087 10.1667C4.11065 5.98106 7.36795 2 12.0257 2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11.9763 2C16.6339 2 19.889 5.98106 16.7688 10.1667L15.4022 12M16.9226 4.03209L11.977 9M11.9763 16.5959L7.98848 22L4 16L8.59228 12', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Aids',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
