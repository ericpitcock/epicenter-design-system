import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 22H12C13.6569 22 15 20.6569 15 19V5C15 3.34315 13.6569 2 12 2H6C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22Z', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M15 15C16.6569 15 18 13.6569 18 12C18 10.3431 16.6569 9 15 9' })
const _hoisted3 = h('path', { 'd': 'M15 19C18.866 19 22 15.866 22 12C22 8.13401 18.866 5 15 5', 'stroke-linecap': 'round' })
const _hoisted4 = h('path', { 'd': 'M12 13.5V10.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'BurningCd',
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
