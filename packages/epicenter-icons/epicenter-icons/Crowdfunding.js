import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '5', 'r': '3', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted3 = h('circle', { 'cx': '20', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '4', 'cy': '20', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 15V14C20 13.4477 19.5523 13 19 13H5C4.44772 13 4 13.4477 4 14V15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M12 11L12 15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Crowdfunding',
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
