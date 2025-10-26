import { defineComponent, h } from 'vue'

const _hoisted1 = h('circle', { 'cx': '12', 'cy': '12', 'r': '2', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M12 10V4M12 14V20', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M22 9H19.5C18.9477 9 18.5 9.44772 18.5 10V14C18.5 14.5523 18.9477 15 19.5 15H22', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M2 9H4.5C5.05228 9 5.5 9.44772 5.5 10V14C5.5 14.5523 5.05228 15 4.5 15H2', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'FootballPitch',
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
