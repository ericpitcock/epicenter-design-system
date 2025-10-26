import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 20H9C9.55228 20 10 19.5523 10 19V5C10 4.44772 9.55228 4 9 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44772 19.5523 4 19 4H15C14.4477 4 14 4.44772 14 5V19C14 19.5523 14.4477 20 15 20Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Pause',
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
