import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M20 4V13M22 18H21C20.4477 18 20 17.5523 20 17V13M20 13H18', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M7 17.5C7 18.8807 5.88071 20 4.5 20C3.11929 20 2 18.8807 2 17.5C2 16.1193 3.11929 15 4.5 15C5.88071 15 7 16.1193 7 17.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M17 17.5C17 18.8807 15.8807 20 14.5 20C13.1193 20 12 18.8807 12 17.5C12 16.1193 13.1193 15 14.5 15C15.8807 15 17 16.1193 17 17.5Z', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M4 9H7C7.62951 9 8.22229 9.29639 8.6 9.8L10.4 12.2C10.7777 12.7036 11.3705 13 12 13H15', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M4 15V5C4 4.44771 4.44772 4 5 4H9.64922C9.87629 4 10.0966 4.07728 10.2739 4.21913L14.6247 7.69976C14.8619 7.88953 15 8.17684 15 8.48062V15M7 17.5H12', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'LiftTruck',
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
