import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16 6V12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12V6C8 5.44772 8.44772 5 9 5H15C15.5523 5 16 5.44772 16 6Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M5 22V4C5 2.89543 5.89543 2 7 2H17C18.1046 2 19 2.89543 19 4V22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 22H21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 5V13M16 9L8 9', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M8.00801 17L7.99902 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Door',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2,
            _hoisted3,
            _hoisted4,
            _hoisted5
        ])
    }
})
