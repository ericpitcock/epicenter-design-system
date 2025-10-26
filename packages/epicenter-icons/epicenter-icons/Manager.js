import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 22V15C20 13.8954 19.1046 13 18 13H16L12.5 22H11.5L8 13H6C4.89543 13 4 13.8954 4 15V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 14.9998L11.5 18.9998L12 20.4998L12.5 18.9998L12 14.9998ZM12 14.9998L11 12.9998H13L12 14.9998Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M15.5 6.49976V5.49976C15.5 3.56676 13.933 1.99976 12 1.99976C10.067 1.99976 8.5 3.56676 8.5 5.49976V6.49976C8.5 8.43275 10.067 9.99976 12 9.99976C13.933 9.99976 15.5 8.43275 15.5 6.49976Z', 'stroke-linecap': 'square', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Manager',
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
