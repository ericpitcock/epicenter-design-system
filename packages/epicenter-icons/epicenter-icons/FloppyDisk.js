import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 22V17C8 15.8954 8.89543 15 10 15H14C15.1046 15 16 15.8954 16 17V22', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M10 7H14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 20V4C3 2.89543 3.89543 2 5 2H14.2759C14.7438 2 15.1968 2.16403 15.5563 2.46356L20.2804 6.40031C20.7364 6.7803 21 7.34319 21 7.93675V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FloppyDisk',
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
