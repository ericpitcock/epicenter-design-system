import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M8 7L8 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 18L12 21', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M3 21H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 13V14.9458C4 15.2905 4.17762 15.611 4.47 15.7938L8 18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12 9V12.5C12 12.8148 11.8518 13.1111 11.6 13.3L8 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('circle', { 'cx': '18', 'cy': '6', 'r': '3', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Desert',
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
            _hoisted5,
            _hoisted6
        ])
    }
})
