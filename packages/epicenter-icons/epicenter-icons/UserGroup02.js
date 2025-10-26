import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M16.5 19.5V18.7678C16.5 18.2735 16.326 17.786 15.9514 17.4635C14.8925 16.5517 13.5111 16 12 16C10.4889 16 9.10754 16.5517 8.04862 17.4635C7.67403 17.786 7.5 18.2735 7.5 18.7678V19.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('circle', { 'cx': '12', 'cy': '11', 'r': '2.5' })
const _hoisted3 = h('path', { 'd': 'M17.5 11C18.8512 11 20.0858 11.5583 21.0292 12.4799C21.3542 12.7974 21.5 13.2476 21.5 13.7019V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('circle', { 'cx': '17.5', 'cy': '6.5', 'r': '2' })
const _hoisted5 = h('path', { 'd': 'M6.5 11C5.1488 11 3.91423 11.5583 2.97079 12.4799C2.64576 12.7974 2.5 13.2476 2.5 13.7019V14.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted6 = h('circle', { 'cx': '6.5', 'cy': '6.5', 'r': '2' })

export default defineComponent({
    name: 'UserGroup02',
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
