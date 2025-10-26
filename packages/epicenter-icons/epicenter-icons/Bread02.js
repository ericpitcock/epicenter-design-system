import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 7C4.23858 7 2 9.23858 2 12V15C2 16.1046 2.89543 17 4 17H12V12C12 9.23858 9.76142 7 7 7Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 17H20C21.1046 17 22 16.1046 22 15V12C22 9.23858 19.7614 7 17 7H7', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M5.5 13.5C5.5 11.567 6.17157 10 7 10C7.82843 10 8.5 11.567 8.5 13.5V17', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Bread02',
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
