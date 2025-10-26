import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M18.0104 7.48959L19.5 6M20.5 13.5C20.5 18.1944 16.6944 22 12 22C7.30558 22 3.5 18.1944 3.5 13.5C3.5 8.80558 7.30558 5 12 5C16.6944 5 20.5 8.80558 20.5 13.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M14.5 2H9.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M12 13.5L15.5 10', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'StopWatch',
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
