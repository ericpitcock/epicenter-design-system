import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 5.00006V9.00006', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 2.00006H10C11.1046 2.00006 12 2.89549 12 4.00006V5.00006H10C8.89543 5.00006 8 4.10463 8 3.00006V2.00006Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M10.5 9.00006H13.5V12.2288C15.5286 12.866 17 14.7611 17 16.9999C17 19.7614 14.7614 21.9999 12 21.9999C9.23858 21.9999 7 19.7614 7 16.9999C7 14.7611 8.47145 12.866 10.5 12.2288V9.00006Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M9.5 9.00006H14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M16 3.00006H14C12.8954 3.00006 12 3.89549 12 5.00006V6.00006H14C15.1046 6.00006 16 5.10463 16 4.00006V3.00006Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'EcoLab02',
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
