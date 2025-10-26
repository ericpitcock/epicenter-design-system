import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M2.5 19.5C2.98686 19.5717 3.45571 19.7949 3.83041 20.1696C4.20512 20.5443 4.42832 21.0131 4.5 21.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M8 16L4 20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M9 16.5L20.5 7.5L21.5 2.5L16.5 3.5L7.5 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 13L4.57179 13.0001C5.10209 13.0002 5.61066 13.2109 5.98565 13.5859L10.4142 18.0142C10.7893 18.3893 11 18.898 11 19.4285V20', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Sword01',
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
            _hoisted4
        ])
    }
})
