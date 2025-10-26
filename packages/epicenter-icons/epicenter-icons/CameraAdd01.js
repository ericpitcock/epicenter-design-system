import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 13.5C16 15.7091 14.2091 17.5 12 17.5C9.79086 17.5 8 15.7091 8 13.5C8 11.2909 9.79086 9.5 12 9.5C14.2091 9.5 16 11.2909 16 13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M16 5.5H21M18.5 8V3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M13 4H10.3028C9.80125 4 9.3329 4.25065 9.0547 4.66795L7.5 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'CameraAdd01',
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
