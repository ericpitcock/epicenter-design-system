import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M7 12H4.36119C3.86619 12 3.44568 12.3621 3.37225 12.8517L2 22H6.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M17 12H19.6388C20.1338 12 20.5543 12.3621 20.6277 12.8517L22 22H17.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted3 = h('path', { 'd': 'M8 7.5L6 22H18L16 7.5', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted4 = h('path', { 'd': 'M17.4931 5C17.4931 4.44772 17.0454 4 16.4931 4H7.49805C6.94576 4 6.49805 4.44772 6.49805 5V6.5C6.49805 7.05228 6.94576 7.5 7.49805 7.5H16.4931C17.0454 7.5 17.4931 7.05228 17.4931 6.5V5Z', 'stroke-linejoin': 'round' })
const _hoisted5 = h('path', { 'd': 'M14.4948 22L14.0851 17.9005C14.034 17.3893 13.6038 17 13.09 17H10.9019C10.3881 17 9.95793 17.3893 9.90683 17.9005L9.49707 22', 'stroke-linejoin': 'round' })
const _hoisted6 = h('path', { 'd': 'M8 4V2M12.0005 4V2M16 4V2', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Castle',
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
