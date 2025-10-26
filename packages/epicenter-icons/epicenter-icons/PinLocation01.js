import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M12 11V18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '7', 'r': '4', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M16.5 16L17.9146 18.8292C18.4133 19.8265 17.688 21 16.5729 21H7.42705C6.31198 21 5.58674 19.8265 6.08541 18.8292L7.5 16', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'PinLocation01',
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
