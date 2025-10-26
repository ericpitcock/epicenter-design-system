import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 11H18C19.1046 11 20 11.8954 20 13V19C20 20.1046 19.1046 21 18 21H6C4.89543 21 4 20.1046 4 19V13C4 11.8954 4.89543 11 6 11H8', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 15V4M8 7L12 3L16 7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Share03',
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
