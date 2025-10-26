import { defineComponent, h } from 'vue'

const _hoisted1 = h('path', { 'd': 'M6 15H3.75C2.7835 15 2 15.7835 2 16.75C2 17.7165 2.7835 18.5 3.75 18.5H13.25C14.2165 18.5 15 19.2835 15 20.25C15 21.2165 14.2165 22 13.25 22H11', 'stroke-linecap': 'round', 'stroke-linejoin': 'round' })
const _hoisted2 = h('path', { 'd': 'M9 15V13.1569C9 12.096 9.42143 11.0786 10.1716 10.3284L17.7929 2.70711C18.1834 2.31658 18.8166 2.31658 19.2071 2.70711L21.2929 4.79289C21.6834 5.18342 21.6834 5.81658 21.2929 6.20711L13.6716 13.8284C12.9214 14.5786 11.904 15 10.8431 15H9Z', 'stroke-linejoin': 'round' })

export default defineComponent({
    name: 'Edit01',
    render() {
        return h('svg', {
            class: 'ep-icon',
            viewBox: '0 0 24 24',
            'aria-hidden': 'true',
            focusable: 'false'
        }, [
            _hoisted1,
            _hoisted2
        ])
    }
})
