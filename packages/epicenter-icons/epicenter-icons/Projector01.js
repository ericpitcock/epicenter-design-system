import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 10H4C2.89543 10 2 10.8954 2 12V17C2 18.1046 2.89543 19 4 19L20 19C21.1046 19 22 18.1046 22 17V12C22 10.8954 21.1046 10 20 10H19', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '15.5', 'cy': '10', 'r': '3.5', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M6 19L5 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M18 19L19 22', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M12.5 5L11.5 4M19.5 4L18.5 5M15.5 4V2', 'stroke-linecap': 'round' })
const _hoisted6 = h('path', { 'd': 'M5.5 13.5H5.50898', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Projector01',
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
