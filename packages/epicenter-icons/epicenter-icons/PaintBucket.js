import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 12.5H3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M22 20C22 21.1046 21.1046 22 20 22C18.8954 22 18 21.1046 18 20C18 18.8954 20 17 20 17C20 17 22 18.8954 22 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9.59914 2L11.5803 3.98299M11.5803 3.98299L20 12.4107L11 21.4192C10.2263 22.1936 8.97195 22.1936 8.19828 21.4192L2.58026 15.7959C1.80658 15.0215 1.80658 13.7659 2.58026 12.9915L11.5803 3.98299Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PaintBucket',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3
        ])
    }
})
