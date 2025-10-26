import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M14.5 7.5C14.5 4.73858 12.2614 2.5 9.5 2.5C6.73858 2.5 4.5 4.73858 4.5 7.5C4.5 10.2614 6.73858 12.5 9.5 12.5C12.2614 12.5 14.5 10.2614 14.5 7.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M2.5 19.5C2.5 15.634 5.63401 12.5 9.5 12.5C10.5736 12.5 11.5907 12.7417 12.5 13.1736', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M21.5 17V14.5C19.5 14.5 18 13.5 18 13.5C18 13.5 16.5 14.5 14.5 14.5V17C14.5 20.5 18 21.5 18 21.5C18 21.5 21.5 20.5 21.5 17Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'UserShield01',
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
