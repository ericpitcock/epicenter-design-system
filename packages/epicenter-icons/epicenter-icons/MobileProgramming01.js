import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M5 7L5.00064 3.99975C5.00088 2.89536 5.89622 2.00019 7.00061 2.00018L17 2.00003C18.1046 2.00001 19 2.89545 19 4.00003V7M5 17V20C5 21.1046 5.89543 22 7 22H17.0006C18.1053 22 19.0008 21.1043 19.0006 19.9996L19 17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M11 19H13', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 10L19 12L17 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M7 10L5 12L7 14', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M13.0002 9.5L11.0002 14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'MobileProgramming01',
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
